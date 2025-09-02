import CompaniesGrid from "./companiesGrid";

export default function Companies() {
	return (
		<section className="relative flex flex-col gap-20 items-center z-6 w-full">
			<h4 className="text-white/70 text-center">Trusted by the world’s most innovative teams</h4>
			<CompaniesGrid />
		</section>
	)
}
