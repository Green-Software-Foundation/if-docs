# IF features

This page simply lists the features of Impact Framework that are not plugins or CLI tools, along with a brief description, usage instruction and link to more detailed docs.

Typically these features are enabled using a piece of manifest config.

## Aggregate

Aggregate collects and summarizes data across time or across components in your tree.

### How to configure

Add the following config to your manifest (this example is for aggregating "cpu/utilization" values across both time and components):

```yaml
aggregation:
  metrics:
    - 'cpu/utilization'
  type: both
```

[Read more on aggregate](../major-concepts/aggregation.md)

## Explainer

The explainer lists the unit, description, aggregation method, and plugins of the parameter that is used in the manifest.

### How to configure

You can toggle the `explainer` by adding the following config to your manifest:

```yaml
explainer: true
```

You can override the parameter metadata provided in a plugin's source code by adding it to the plugin's `initialize` block, as follows:

```yaml
explainer: true
plugins:
  'sum-carbon':
    path: 'builtin'
    method: Sum
    config:
      input-parameters:
        - carbon-operational
        - carbon-embodied
      output-parameter: carbon
    parameter-metadata:
      inputs:
        carbon-operational:
          description: "carbon emitted due to an application's execution"
          unit: 'gCO2eq'
          aggregation-method:
            time: sum
            component: sum,
        carbon-embodied:
          description: "carbon emitted during the production, distribution and disposal of a hardware component, scaled by the fraction of the component's lifespan being allocated to the application under investigation"
          unit: 'gCO2eq'
          aggregation-method:
            time: sum
            component: sum
```

Read more on [explainer](../users/how-to-use-the-explain-feature.md)

## Inline Arithmetic Expressions

Inline arithmetic expressions allow basic mathematical operations to be embedded directly within `config` parameters and `inputs` values in manifest files. This enables dynamic calculations using constants or input variables, eliminating the need for manual pre-calculation of parameters.

### Supported Symbols and Operations:

- `=`: Indicates the start of an arithmetic expression.
- Supported operators: `*` (multiplication), `+` (addition), `-` (subtraction), `/` (division).

### Syntax:

- To define an inline arithmetic expression, the string must start with an equal sign (`=`). For example:
  ```yaml
  'input-parameter': '= 2 * carbon'
  ```
  This expression evaluates the multiplication of `2` by the value of the `carbon` parameter from the input.
- Arithmetic operations between two constants can also be defined without using the equal sign (`=`):
  ```yaml
  coefficient: 2 * 2
  ```
  This expression evaluates the multiplication of `2` by `2` directly.
- If the parameter name contains symbols, it should be placed in the quotes. The expresion should look like:
  ```yaml
  output-parameter: '= 2 * "carbon-product"'
  ```

### Example:

```yaml
config:
  'input-parameter': '= 2 * carbon'
  coefficient: 2 * 2
  'output-parameter': '= 2 * "carbon-product"'
---
inputs:
  - timestamp: 2023-08-06T00:00
    duration: 3600 * 60
    carbon: = 10 * "other-param
    other-param: 3
```

### Plugin support

To enable inline arithmetic expressions in your plugin, specify it in your plugin’s definition function like this:

```ts
allowArithmeticExpressions: ['input-parameter'];
```

In the `allowArithmeticExpressions` array, list all parameters (whether in config, inputs, or outputs) that can contain arithmetic expressions. The calculations are handled internally (in the PluginFactory interface).

If your plugin doesn’t have specified parameters but has dynamic output parameters that should support evaluation, you can enable `arithmeticExpressions` with an empty array:

```ts
allowArithmeticExpressions: [];
```

To design your plugin with support for arithmetic expressions, you can use various utility functions.

- If your plugin's config parameters must be of type `number`, you can use the `validateArithmeticExpression` function from `@grnsft/if-core/utils`:

```ts
import {validateArithmeticExpression} from '@grnsft/if-core/utils';

// Plugin definition

configValidation: (config: ConfigParams) => {
    const configSchema = z.object({
      coefficient: z.preprocess(
        value => validateArithmeticExpression('coefficient', value, 'number'),
        z.number()
      ),
      'input-parameter': z.string().min(1),
      'output-parameter': z.string().min(1),
    });

    return validate<z.infer<typeof configSchema>>(
      configSchema as ZodType<any>,
      config
    );
  },
```

- If your config parameters contain arithmetic expressions like the following:

```yaml
config:
  keep-existing: false
  from: = 4 * "if-size"
  to: 'if-repo-size'
```

But during implementation, you need to extract the pure parameter name (e.g., `if-size`), you can use the `getParameterFromArithmeticExpression` function:

```ts
import { getParameterFromArithmeticExpression } from '@grnsft/if-core/utils';

// Plugin definition

configValidation: (config: ConfigParams) => {
  const configSchema = z.object({
    'keep-existing': z.boolean(),
    from: z.string().min(1),
    to: z.string().min(1),
  });

  const extractedFrom = getParameterFromArithmeticExpression(config.from);
  const updatedConfig = config['keep-existing']
    ? config
    : { ...config, 'pure-from': extractedFrom };

  validate<z.infer<typeof configSchema>>(configSchema, updatedConfig);

  return updatedConfig;
};
```
