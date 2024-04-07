import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({params}) {
	const router = useRouter();
  const [title, id] = params || [];
	console.log(router);
  
	return (
		<div>
      <Seo title={title} />
			<h4>{title}</h4>
		</div>
	);
}

export function getServerSideProps({query:{params}}) {
  //console.log(context) // query: { params: [ 'Godzilla x Kong: The New Empire', '823464' ] },
  return {
    props: {params}
  };
}
// 여기서는 server side rendering으로 title과 id를 얻기위해 getServerSideProps를 사용한다.