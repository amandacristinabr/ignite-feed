import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Amanda Cristina"
            content="loren dkshkfds d dshf asl sdasnd dçhd lds df nslfshk sasfs fstnçjdt foasnfww wqw fiw fuwtbwbfnwq ierbqkwer wqtkknç  grtk. " />

          <Post
            author="Dilan Bueno"
            content="Um novo post muito legal" />
        </main>
      </div>

    </div>
  )
}


