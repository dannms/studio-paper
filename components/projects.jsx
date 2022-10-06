import Card from './card';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const Projects = () => {
	return (
		<section id="projetos" className="py-20">
			<div className="grid grid-cols-1">
				<div className="flex items-center gap-3">
					<ArrowUpRightIcon className="w-5 h-5 text-gold" />
					<h2 className="font-mono">Projetos recentes</h2>
				</div>
				<div className="grid grid-cols-2 gap-20 py-32">
					<Card />
				</div>
			</div>
			<div className="w-full flex flex-col gap-8 text-center items-center justify-center pt-20">
				<small className="font-mono text-gold">
					Eles confiam em nós
				</small>
				<p className="text-xl max-w-xl">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Beatae eaque enim veniam asperiores at nam commodi, quia
					laborum incidunt laudantium dolor dignissimos deserunt et
					maxime consectetur nostrum qui debitis sint?
				</p>
				<button className="text-sm bg-white text-black font-mono font-bold px-6 py-3 rounded-xl">
					Ver todos os projetos
				</button>
			</div>
		</section>
	);
};

export default Projects;
