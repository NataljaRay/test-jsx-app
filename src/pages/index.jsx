import Example from "../components/examples/Example";
import Button from "../components/Button";
import {Icon, Image} from "minista";
import {ReactComponent as IconLinkSvg} from '@/assets/images/icon-external-link.svg'

export const matadata = {
    title: 'Home',
    bla: '123',
}
export default () => {


  return (
    <>
      <h1>Home!</h1>
        {/*<Image />*/}
        <Image src="/src/assets/images/logo.png"/>

        {/*<Icon iconId="icon-tw"/>*/}
        <IconLinkSvg/>

      {/*<Example/>*/}
      {/*<Button/>*/}

    </>
  )
}
