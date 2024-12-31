import type { CardSlots, CardVariants } from "./BaseCard.styles"
import type { SlotProp, WithClass } from "../../Utils"

export interface BaseCardProps extends CardVariants, SlotProp<CardSlots>, WithClass {
  title?: string
}