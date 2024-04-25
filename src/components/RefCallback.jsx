import { useRef, useState } from "react";

export default function CatFriendsTwo() {
  const itemsRef = useRef(null); // Store purposes only
  // eslint-disable-next-line no-unused-vars
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat) { //cat is used as key to get the cat position
    const map = getMap();
    const node = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node); // "https://loremflickr.com/320/240/cat?lock=1", <li>
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
//   ["https://loremflickr.com/320/240/cat?lock=1","https://loremflickr.com/320/240/cat?lock=2","https://loremflickr.com/320/240/cat?lock=3","https://loremflickr.com/320/240/cat?lock=4","https://loremflickr.com/320/240/cat?lock=5","https://loremflickr.com/320/240/cat?lock=6"]
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

