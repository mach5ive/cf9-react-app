// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";


  //   type PropsA = {
  //       title: string;
  //       description: string;
  //   }
  //
  //   type PropsB = {
  //       title: string;
  //       description: string;
  //   }
  //
  // //   UNION
  //   type Stqtus = "Error" | "Warning" | "Info";
  //
  // //   Tuples
  //   type Coordinates = [number, number];
  //
  // //   Functions
  //   type ClickHandler = (event: MouseEvent) => void;
  //
  // //   INTERSECTION
  //   type Props = PropsA & PropsB;
  //
  //   interface PropsTwo {
  //       title: string;
  //       description: string;
  //   }
  //
  //   interface PropsTwo {
  //       price: number,
  //       sort: number,
  //   }
  //
  // //   PropsTwo = {title, description, price, sort}
  //
  //   interface PropsThree extends PropsTwo {
  //       image: string,
  //   }
  //
  // //   PropsThree = {title, description, price, sort, image}

function App() {

  return (
    <>
      {/*LESSON TWO*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}

      {/*LESSON THREE*/}
      <ArrowFunctionalComponentWithProps
          title="Heading1"/>
      <ArrowFunctionalComponentWithProps
          title="Second Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolor facilis fugit necessitatibus, nulla provident suscipit voluptatem voluptates voluptatum."
      />


    </>
  )
}

export default App
