import BentoItemLarge from "./bentoItemLarge";
import BentoItemSmall from "./bentoItemSmall";

export default function Bento() {
	return (
		<section className="w-full h-fit flex flex-col items-center gap-15">
			<h3 className="font-main sm:text-3xl text-2xl max-w-138.5 text-center">Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h3>
			<div className="sm:max-w-full w-full sm:min-h-150 min-h-202.5 grid sm:grid-cols-3 grid-cols-1 gap-5">
				<BentoItemSmall image="/images/Visual1.png" title="SEO goal setting" description="Helps you set and achieve SEO goals with guided assistance."/>
				<BentoItemLarge image="/images/App Wide.png" title="User-friendly dashboard" description="Perform complex SEO audits and optimizations with a single click."/>
				<BentoItemLarge image="/images/AppWide2.png" title="Visual reports" description="Visual insights into your site’s performance."/>
				<BentoItemSmall image="/images/Visual2.png" title="Smart Keyword Generator" description="Automatic suggestions and the best keywords to target."/>
			</div>
		</section>
	)
}
