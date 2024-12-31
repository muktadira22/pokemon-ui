import { HTMLAttributes } from 'react'

export type SlotProp<T extends string> = {
  slotClasses?: Partial<Record<T, string>>;
}

export type WithClass = {
  className?: HTMLAttributes<string>['className'];
}