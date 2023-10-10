const title = 'Bonjour les gens !!';
const style = {color: 'red', backgroundColor: 'blue'};
const showTitle = true;
const todos = [
  'Créer des composants',
  'Présenter le JSX',
  'Présenter react'
]

function App() {

  const handleClick = (e) => {
    console.log(e)
    alert('j"ai cliqué sur le titre')
  }


  return <>

      {showTitle ? 
        <Title color="green" backgroundColor='pink' hidden data-demo='demo' id='prout' class='prout2'> Mon Composant </Title> :
        <p>Demo</p>
      }
      <input type='text' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam ipsam quidem dolor repellendus vel expedita, vero eaque obcaecati, quasi inventore labore ab maiores aspernatur laudantium temporibus, beatae iure tempora.
        Cupiditate qui earum ducimus voluptatem rem illo, amet voluptate? Optio, commodi. Id ipsa, illum, harum perspiciatis quae qui nisi nesciunt consequatur a, labore minima cumque! Repellat deserunt quod aliquid atque?
        Aliquam repellat deleniti ut placeat qui. Perferendis debitis aspernatur, recusandae asperiores nisi libero molestiae consequuntur voluptates quasi placeat! Officia ut architecto omnis tenetur doloremque corporis ad provident ipsum numquam voluptate.
        Dicta quia minima necessitatibus maxime at cupiditate eligendi exercitationem perferendis qui aperiam quibusdam obcaecati quae, quasi porro perspiciatis consequatur. Aliquid veritatis cupiditate ipsum dolorem quidem quae a laudantium sapiente modi.
      </p>
      <ul>
        {todos.map(todo => {
          return <li key={todo}>{todo}</li>
        })}
      </ul>
    
    </>
}

function Title ({color, children, backgroundColor, hidden, ...props}){
  console.log(hidden)
  // if(hidden) return null
  // const props = {
  //   id: 'monid',
  //   className: 'maclass'
  // }
  return <h1 style={{color: color, backgroundColor: backgroundColor}} {...props}>Bonjour les gens ceci est {children}</h1>
}

export default App
