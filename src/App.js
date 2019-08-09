import React,{ Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NewDatePet from './components/NewDatePet';
import ListDatePets from './components/ListDatePets';

class App extends Component {
  state = { dates: [] }

  componentDidMount() {
    const datesLS = localStorage.getItem('dates')
    if(datesLS) {
      this.setState({
        dates : JSON.parse(datesLS)
      })
    }
  }
  componentDidUpdate() {
    localStorage.setItem('dates', JSON.stringify(this.state.dates))
  }

  createNewDatePet = datePet => {
    console.log(datePet)
    this.setState({ dates: [...this.state.dates, datePet]})
    console.log(this.state.dates)
  }

  deleteDatePet = id => {
    const actualDates = this.state.dates;
    console.log(id)
    const dates = actualDates.filter( (date, index) => index !== id)
    this.setState({ dates })
  }

  render() { 
    return ( 
      <div className="container">
        <Header 
        titulo = 'Administrador de Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDatePet createNewDatePet={this.createNewDatePet} />
          </div>

          <div className="mt-10 col-md-10 mx-auto">
            <ListDatePets 
              dates={this.state.dates}
              deleteDatePet={this.deleteDatePet}
            />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;