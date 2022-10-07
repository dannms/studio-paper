import Link from 'next/link';
import { motion } from 'framer-motion';

const Card = () => {
	return (
		<motion.article
			initial={{ y: 100, opacity: 0 }}
			whileInView={{
				y: 0,
				opacity: 1,
				transition: { duration: 0.5, type: 'spring', stiffness: 40 },
			}}
			viewport={{ once: true }}
			className="w-full flex flex-col gap-8"
		>
			<Link href="/">
				<a>
					<div className="w-full h-96 lg:h-[600px] relative bg-white"></div>
				</a>
			</Link>
			<div className="flex flex-col gap-3">
				<Link href="/projetos/project">
					<a>
						<div className="text-xl font-bold">
							Título do projeto
						</div>
					</a>
				</Link>
				<small className="text-white/30 cursor-default select-none">
					Categorias
				</small>
			</div>
		</motion.article>
	);
};

export default Card;
