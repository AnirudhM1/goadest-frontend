import {motion} from 'framer-motion';

const Location = () => {
    return (
        <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}}>
            <h2>Location Page</h2>
        </motion.div>
    )
}

export default Location
