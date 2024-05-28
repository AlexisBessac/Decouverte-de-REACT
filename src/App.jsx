import './App.css'
import Location from './location.jsx'

function App() {
  
  const data = [
    {
      id: 1,
      name: "Paris",
      src: "https://picsum.photos/id/237/200/300",
      description: "ville de l'amour",
      bold: true,
      monuments: [
        "Obélisque",
        "Montmarte"
      ]
    },
    {
      id: 2,
      name: "Washington",
      src: "https://picsum.photos/seed/picsum/200/300",
      description: "ville des Etats-Unis",
      bold: true,
      monuments: [
        "Washington Monument",
        "Mémorial de Lincoln"
      ]
    },
    {
      id: 3,
      name: "Londres",
      src: "https://picsum.photos/200/300.webp",
      description: "capitale de la Grande-Bretagne",
      liked: false,
      monuments: [
        "Big Ben",
        "Westminster"
      ]
    }
  ]

  return (
    <div>
      {data.map(location => (
        <Location
          key={location.id}
          name={location.name}
          src={location.src}
          description={location.description}
          bold={location.bold}
          monuments={location.monuments}
        />
      ))}
    </div>

  )
}

export default App