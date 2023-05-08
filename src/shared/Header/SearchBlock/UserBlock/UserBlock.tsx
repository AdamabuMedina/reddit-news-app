import React from 'react'
import { useUserData } from '../../../../hooks'
import { Break } from '../../../Break'
import { EIcons, Icon } from '../../../Icons'
import { EColors, Text } from '../../../Text'
import styles from './userBlock.css'


export function UserBlock() {
  const {data, loading} = useUserData()
  const [innerWidth, setInnerWidth] = React.useState(0)

  React.useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [innerWidth])

  return (
    <a
    href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=RANDOM_STRING&redirect_uri=${process.env.DOMAIN}/auth&duration=permanent&scope=identity read submit`}
    className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {
          data.iconImg
          ? <img src={data.iconImg} alt="user avatar" className={styles.avatarImage}/>
          : <Icon name={EIcons.anonIcon} size={innerWidth && innerWidth<1024?30:50} />
        }
      </div>
      <div className={styles.username}>
        <Break size={12}/>
        {
              loading
              ? <Text size={20} color={EColors.grey99}><span>Loading</span></Text>
              :
              <Text size={20} color={data.name ? EColors.black : EColors.grey99}>
                {data.name || "Аноним"}
              </Text>
        }
      </div>
    </a>
  )
}