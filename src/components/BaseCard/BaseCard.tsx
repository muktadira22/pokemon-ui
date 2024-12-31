import type { BaseCardProps } from "./BaseCard.props"
import { cardStyles, type CardSlots} from "./BaseCard.styles"

// const staticClass = makeStaticClass<CardSlots>("card")


const BaseCard = (props: BaseCardProps) => {
  const styles = cardStyles(props);

  <div className={styles.root({
    // className:
  })}>

  </div>
}

export default BaseCard