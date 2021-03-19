import {motion} from 'framer-motion';

const Blog = () => {
    return (
        <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}}>
            <h2>Blog Page</h2>
        </motion.div>
    )
}

export default Blog
