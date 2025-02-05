// Frontend Skills
import ReactLightImg from '@/app/assets/images/skills/react-light.png'
import ReactDarkImg from '@/app/assets/images/skills/react-dark.png'
import NextLightImg from '@/app/assets/images/skills/nextjs-light.png'
import NextDarkImg from '@/app/assets/images/skills/nextjs-dark.png'
import VueLightImg from '@/app/assets/images/skills/vuejs-light.png'
import VueDarkImg from '@/app/assets/images/skills/vuejs-dark.png'
import FlutterLightImg from '@/app/assets/images/skills/flutter-light.png'
import FlutterDarkImg from '@/app/assets/images/skills/fluter-dark.png'
import TailwindLightImg from '@/app/assets/images/skills/tailwindcss-light.png'
import TailwindDarkImg from '@/app/assets/images/skills/tailwindcss-dark.png'
import HTMLImg from '@/app/assets/images/skills/html.png'
import CSSImg from '@/app/assets/images/skills/css.png'
import SassImg from '@/app/assets/images/skills/sass.png'

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

// Languages
import CppImg from '@/app/assets/images/skills/cpp.png'
import JavascriptImg from '@/app/assets/images/skills/javascript.png'
import TypescriptImg from '@/app/assets/images/skills/typescript.png'
import JavaLightImg from '@/app/assets/images/skills/java-light.png'
import JavaDarkImg from '@/app/assets/images/skills/java-dark.png'
import PythonLightImg from '@/app/assets/images/skills/python-light.png'
import PythonDarkImg from '@/app/assets/images/skills/python-dark.png'
import KotlinLightImg from '@/app/assets/images/skills/kotlin-light.png'
import KotlinDarkImg from '@/app/assets/images/skills/kotlin-dark.png'
import DartLightImg from '@/app/assets/images/skills/dart-light.png'
import DartDarkImg from '@/app/assets/images/skills/dart-dark.png'

export const getSkillList = (theme: 'light' | 'dark') => {
  return [
    //Frontend
    {
      label: 'ReactJS',
      imgPath: theme !== 'light' ? ReactLightImg : ReactDarkImg,
    },
    {
      label: 'NextJS',
      imgPath: theme !== 'light' ? NextLightImg : NextDarkImg,
    },
    {
      label: 'VueJS',
      imgPath: theme !== 'light' ? VueLightImg : VueDarkImg,
    },
    {
      label: 'Flutter',
      imgPath: theme !== 'light' ? FlutterLightImg : FlutterDarkImg,
    },
    {
      label: 'HTML',
      imgPath: HTMLImg,
    },
    {
      label: 'Tailwind CSS',
      imgPath: theme !== 'light' ? TailwindLightImg : TailwindDarkImg,
    },
    {
      label: 'CSS',
      imgPath: CSSImg,
    },
    {
      label: 'SASS',
      imgPath: SassImg,
    },
    //Backend
    {
      label: 'NodeJS',
      imgPath: theme !== 'light' ? NodeLightImg : NodeDarkImg,
    },
    {
      label: 'ExpressJS',
      imgPath: theme !== 'light' ? ExpressLightImg : ExpressDarkImg,
    },
    {
      label: 'FastapiImg',
      imgPath: FastapiImg,
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
      label: 'MongoDB',
      imgPath: MongodbImg,
    },
    {
      label: 'Docker',
      imgPath: DockerImg,
    },
    {
      label: 'Git',
      imgPath: GitImg,
    },

    // Languages:
    {
      label: 'CPP',
      imgPath: CppImg,
    },
    {
      label: 'Javascript',
      imgPath: JavascriptImg,
    },
    {
      label: 'Typescript',
      imgPath: TypescriptImg,
    },
    {
      label: 'Java',
      imgPath: theme !== 'light' ? JavaLightImg : JavaDarkImg,
    },
    {
      label: 'Python',
      imgPath: theme !== 'light' ? PythonLightImg : PythonDarkImg,
    },
    {
      label: 'Kotlin',
      imgPath: theme !== 'light' ? KotlinLightImg : KotlinDarkImg,
    },
    {
      label: 'Dart',
      imgPath: theme !== 'light' ? DartLightImg : DartDarkImg,
    },
  ]
}
