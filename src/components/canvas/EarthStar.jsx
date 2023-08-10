import Star from "./Star";
import Earth from "./Earth";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

function EarthStar() {
    return (
        <div className='relative z-0 w-full h-full'>
            <Earth />
            <motion.div
                variants={slideIn('down', 'spring', 1, 2)}
                className='absolute w-full h-full z-[-1] top-0 right-0'
            >
                <Star />
            </motion.div>
        </div>
    )
}

export default EarthStar