import {motion} from 'framer-motion';
import RecentBlogs from './RecentBlogs';
import Search from './Search';

const Home = () => {
    return (
        <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}}>
            <h2>Home Page</h2>
            <Search />
            <RecentBlogs />
        </motion.div>
    )
}

export default Home
