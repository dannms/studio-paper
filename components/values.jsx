const Values = ({ category, id }) => {
	return (
		<div className="flex flex-col w-full">
			<div className="pt-6 flex gap-4 font-mono">
				<small className="text-gold">{`# ${id}`}</small>
				<small className="font-mono">{category}</small>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 w-full py-20 gap-20">
				<div className="w-full aspect-square bg-white"></div>
				<div>
					<p className="text-xl">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Voluptatem eligendi suscipit ratione, culpa iusto
						maiores quo consequuntur ipsum distinctio cupiditate nam
						nostrum! Facilis dicta, adipisci nemo at perspiciatis
						expedita incidunt.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Values;
