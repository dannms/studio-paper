import Link from 'next/link';

const PNavigation = () => {
	return (
		<header className="py-10">
			<div className="mx-auto max-w-7xl">
				<div className="flex items-center justify-between">
					<div>1</div>
					<div>
						<Link href="/">
							<a>
								<div>Voltar para home</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default PNavigation;
