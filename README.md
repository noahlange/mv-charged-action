# mv-charged-action
Allows skills to be "charged" for an arbitrary number of rounds before use.

## Notetags

```typescript
export interface RequiredProps {
  message?: string;
  state?: number;
};

export interface WithFormula extends RequiredProps {
  formula: string
};

export interface WithTurns extends RequiredProps {
  turns: number;
}

export type ChargeActionNotetag = WithTurns | WithFormula;
```

Examples include...

```xml
<!-- must have either turns *or* formula -->
<charge message=" is charging %1!" formula="a.tp - 10" />
<!-- message is optional, as is state -->
<charge state="11" turns="3"/>
```
