async function getWebsiteData() {
  const html = await fetch('https://regres.in/api/users/23', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  console.log(html.ok);
}

getWebsiteData();
