import { tv } from "tailwind-variants"

export const cardStyles = tv({
  slots: {
    root: "relative w-full flex flex-col bg-white rounded-md divide-y divide-gray-300",
    header: "flex items-center gap-2 p-4",
    title: "inline-block flex-1 text-base font-medium",
    extra: "ms-auto",
    body: "p-4 text-base",
    footer: "p-4 text-base"
  },
  variants: {
    bordered: {
      true: {
        root: "border border-gray-300"
      },
      false: {
        root: "shadow"
      }
    }
  }
})

export type CardSlots = keyof Pick<typeof cardStyles, "slots">["slots"]

export type CardVariants = {
  bordered?: NonNullable<Parameters<typeof cardStyles>[0]>["bordered"]
}