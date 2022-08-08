export async function getLinksSaved(key){
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSaved(key);

  const hasLink = linksStored.some(link => link.id === newLink.id);

  if(hasLink){
    return;
  } 
  
  linksStored.push(newLink);
  console.log(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("link salvo")
}

export async function deleteLink(id, links) {
  let myLinks = links.filter(link => {
    return (link.id !== id)
  })

  localStorage.setItem('@shortenLink', JSON.stringify(myLinks))

  return myLinks;
}