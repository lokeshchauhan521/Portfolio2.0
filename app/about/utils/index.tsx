// Frontend Skills
import ReactLightImg from '@/app/assets/images/skills/react-light.png'
import ReactDarkImg from '@/app/assets/images/skills/react-dark.png'
import VueLightImg from '@/app/assets/images/skills/vuejs-light.png'
import VueDarkImg from '@/app/assets/images/skills/vuejs-dark.png'
import HTMLImg from '@/app/assets/images/skills/html.png'
import CSSImg from '@/app/assets/images/skills/css.png'

// Backend Skills
import NodeLightImg from '@/app/assets/images/skills/nodejs-light.png'
import NodeDarkImg from '@/app/assets/images/skills/nodejs-dark.png'
import ExpressLightImg from '@/app/assets/images/skills/express-light.png'
import ExpressDarkImg from '@/app/assets/images/skills/express-dark.png'
import FastapiImg from '@/app/assets/images/skills/fastapi.png'
import RedisLightImg from '@/app/assets/images/skills/redis-light.png'
import RedisDarkImg from '@/app/assets/images/skills/redis-dark.png'
import MongodbImg from '@/app/assets/images/skills/mongodb.png'
import MysqlLightImg from '@/app/assets/images/skills/mysql-light.png'
import MysqlDarkImg from '@/app/assets/images/skills/mysql-dark.png'
import DockerImg from '@/app/assets/images/skills/docker.png'
import GitImg from '@/app/assets/images/skills/git.png'
import KafkaImg from '@/app/assets/images/skills/Kafka.png'
import DjangoImg from '@/app/assets/images/skills/Django.png'
import FlaskLightImg from '@/app/assets/images/skills/Flask-Light.png'
import FlaskDarkImg from '@/app/assets/images/skills/Flask-Dark.png'

// Languages
import CppImg from '@/app/assets/images/skills/cpp.png'
import JavascriptImg from '@/app/assets/images/skills/javascript.png'
import TypescriptImg from '@/app/assets/images/skills/typescript.png'
import PythonLightImg from '@/app/assets/images/skills/python-light.png'
import PythonDarkImg from '@/app/assets/images/skills/python-dark.png'

export const getSkillList = (theme: 'light' | 'dark') => {
  return [
    {
      label: 'Python',
      imgPath: theme !== 'light' ? PythonLightImg : PythonDarkImg,
    },
    {
      label: 'CPP',
      imgPath: CppImg,
    },
    {
      label: 'Typescript',
      imgPath: TypescriptImg,
    },
    {
      label: 'Javascript',
      imgPath: JavascriptImg,
    },
    {
      label: 'FastAPI',
      imgPath: FastapiImg,
    },
    {
      label: 'Django',
      imgPath: DjangoImg,
    },
    {
      label: 'Flask',
      imgPath: theme!=="light" ? FlaskLightImg: FlaskDarkImg,
    },
    {
      label: 'kafka',
      imgPath: KafkaImg,
    },
    {
      label: 'Redis',
      imgPath: theme !== 'light' ? RedisLightImg : RedisDarkImg,
    },
    {
      label: 'MySQL',
      imgPath: theme !== 'light' ? MysqlLightImg : MysqlDarkImg,
    },
    {
      label: 'Docker',
      imgPath: DockerImg,
    },
    {
      label: 'Git',
      imgPath: GitImg,
    },
    {
      label: 'NodeJS',
      imgPath: theme !== 'light' ? NodeLightImg : NodeDarkImg,
    },
    {
      label: 'ExpressJS',
      imgPath: theme !== 'light' ? ExpressLightImg : ExpressDarkImg,
    },
    {
      label: 'MongoDB',
      imgPath: MongodbImg,
    },
    {
      label: 'ReactJS',
      imgPath: theme !== 'light' ? ReactLightImg : ReactDarkImg,
    },
    {
      label: 'VueJS',
      imgPath: theme !== 'light' ? VueLightImg : VueDarkImg,
    },
    {
      label: 'HTML',
      imgPath: HTMLImg,
    },  
    {
      label: 'CSS',
      imgPath: CSSImg,
    },
  ]
}
