import Counter from '../components/Counter';

function Home() {
  const myAnimals = [{ animalName: 'Pig' }, { animalName: 'Dog' }, { animalName: 'Duck' }];

  return (
    <>
      <h1>Animal Counter</h1>
      {myAnimals.map((animal) => (
        <Counter animalName={animal.animalName} />))}
    </>
  );
}

export default Home;
