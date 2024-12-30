export type SlopProp<T extends string> = {
  slotClasses?: Partial<Record<T, string>>;
}