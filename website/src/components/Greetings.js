import React, { useEffect } from "react"

const Greetings = () => {
  function decodeText() {
    var text = document.getElementsByClassName("decode-text")[0]

    var state = []
    for (var i = 0, j = text.children.length; i < j; i++) {
      text.children[i].classList.remove("state-1", "state-2", "state-3")
      state[i] = i
    }

    var shuffled = shuffle(state)

    for (let i = 0, j = shuffled.length; i < j; i++) {
      var child = text.children[shuffled[i]]

      // Use classList directly without assigning to a variable
      var state1Time = Math.round(Math.random() * (2000 - 300)) + 50
      if (child.classList.contains("text-animation")) {
        setTimeout(firstStages.bind(null, child), state1Time)
      }
    }
  }

  function firstStages(child) {
    // Use classList directly without assigning to a variable
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3")
    } else if (child.classList.contains("state-1")) {
      child.classList.add("state-2")
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1")
      setTimeout(secondStages.bind(null, child), 100)
    }
  }

  function secondStages(child) {
    // Use classList directly without assigning to a variable
    if (child.classList.contains("state-1")) {
      child.classList.add("state-2")
      setTimeout(thirdStages.bind(null, child), 100)
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1")
    }
  }

  function thirdStages(child) {
    // Use classList directly without assigning to a variable
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3")
    }
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  const decode = () => {
    decodeText()
    setInterval(() => decodeText(), 15000)
  }

  useEffect(() => {
    decode() // Call the decode function when the component mounts
  }, []) // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const handleHover = () => {
    decode() // Call the decode function when hovering over the element
  }
  return (
    <div>
      <div className="decode-text " onMouseEnter={handleHover}>
        <div className="text-animation">G</div>
        <div className="text-animation">R</div>
        <div className="text-animation">3</div>
        <div className="text-animation">3</div>
        <div className="text-animation">T</div>
        <div className="text-animation">!</div>
        <div className="text-animation">N</div>
        <div className="text-animation">G</div>
        <div className="text-animation">S</div>
        <div className="space"></div>
        <div className="text-animation">F</div>
        <div className="text-animation">R</div>
        <div className="text-animation">!</div>
        <div className="text-animation">3</div>
        <div className="text-animation">N</div>
        <div className="text-animation">D</div>
        <div className="space"></div>
      </div>
    </div>
  )
}

export default Greetings
