import getUrls from "@/app/db/getUrls";


export default async function Page() {

  const listUrls = await getUrls();

  // console.log(listUrls);

  const listItems = listUrls.map((urlObj, index) => {
    return <li key={index}><a href={urlObj.url}>{urlObj.short}</a> </li>
  });

  console.log(listItems);

  return <ul>{listItems}</ul>;


}