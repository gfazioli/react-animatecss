/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'
import pack from "../../../../../package.json";

import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <div>
      <Flex aligmItems="center" sx={styles.logo} data-testid="logo">
        <Link to="/" sx={styles.link}>
          {config.title} v{pack.version}
        </Link>
      </Flex>
      <p sx={styles.description}>{config.description}</p>
    </div>
  )
}
