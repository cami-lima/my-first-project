// import React, { Component } from "react";
// import Membro from "./components/Membro";
// import Feed from "./components/Feed";
// class App extends Component {

// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {
//         nome: "",
//         email: "",
//         senha: "",
//         sexo: "",
//       },
//     };

//     this.dadosForm = this.dadosForm.bind(this);
//   }

//   dadosForm(event) {
//     let form = this.state.form;
//     form[event.target.name] = event.target.value;
//     this.setState({ form: form });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Login</h2>
//         Nome:
//         <input
//           type="text"
//           name="nome"
//           value={this.state.form.nome}
//           onChange={this.dadosForm}
//         />{" "}
//         <br />
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={this.state.form.email}
//           onChange={this.dadosForm}
//         />
//         <br />
//         Senha:
//         <input
//           type="password"
//           name="senha"
//           value={this.state.form.senha}
//           onChange={this.dadosForm}
//         />
//         <br />
//         Sexo:
//         <select
//           name="sexo"
//           value={this.state.form.sexo}
//           onChange={this.dadosForm}
//         >
//           <option value="masculino">Masculino</option>
//           <option value="feminino">Feminino</option>
//         </select>
//         <div>
//           <h3>{this.state.form.email}</h3>
//           <h3>{this.state.form.senha}</h3>
//           <h3>{this.state.form.sexo}</h3>
//           <h3>{this.state.form.nome}</h3>
//         </div>
//       </div>
//     );
//   }
// }

// constructor(props) {
//   super(props);
//   this.state = {
//     nome: "",
//     email: "",
//     senha: "",
//     error: "",
//   };
//   this.cadastrar = this.cadastrar.bind(this);
// }

// cadastrar(event) {
//   const { nome, email, senha } = this.state;

//   if (nome !== "" && email !== "" && senha !== "") {
//     alert(`Nome: ${nome} \n Email: ${email} \n Senha: ${senha}`);
//   } else {
//     this.setState({ error: "Digite os campos vazios" });
//   }

//   event.preventDefault();
// }

// render() {
//   return (
//     <div>
//       <h1>Novo usuário</h1>
//       {this.state.error && <p>{this.state.error} </p>}
//       <form onSubmit={this.cadastrar}>
//         <label>Nome:</label>
//         <input
//           type="text"
//           value={this.state.nome}
//           onChange={(event) => this.setState({ nome: event.target.value })}
//         />{" "}
//         <br />
//         <label>Email:</label>
//         <input
//           type="email"
//           value={this.state.email}
//           onChange={(event) => this.setState({ email: event.target.value })}
//         />
//         <br />
//         <label>Senha:</label>
//         <input
//           type="password"
//           value={this.state.senha}
//           onChange={(event) => this.setState({ senha: event.target.value })}
//         />
//         <br />
//         <button type="submit">Cadastrar</button>
//       </form>
//     </div>
//   );
// }
// }

//

// class App extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       feed: [
//         { id: 1, username: "Camila", curtidas: 1, comentarios: 0 },
//         { id: 2, username: "Joyce", curtidas: 120, comentarios: 25 },
//         { id: 2, username: "Amanda", curtidas: 40, comentarios: 8 },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.feed.map((item) => {
//           return (
//             <Feed
//               id={item.id}
//               username={item.username}
//               curtidas={item.curtidas}
//               comentarios={item.comentarios}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false,
//     };
//     this.sair = this.sair.bind(this);
//     this.entrar = this.entrar.bind(this);
//   }

//   sair() {
//     this.setState({ status: false });
//   }

//   entrar() {
//     this.setState({ status: true });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.status ? (
//           <div>
//             <h2>Bem-vindo ao sistema</h2>
//             <button onClick={this.sair}>Sair</button>
//           </div>
//         ) : (
//           <div>
//             <h2>Olá visitante, faça o login!</h2>
//             <button onClick={this.entrar}>Entrar no sistema</button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Membro nome="Visitante" />
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hora: "00:00:00",
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ hora: new Date().toLocaleTimeString });
//     }, 1000);
//   }

//   componentDidUpdate() {
//     console.log("ATUALIZOU!!!!");
//   }

//   shouldComponentUpdate(){

//   }

//   render() {
//     return (
//       <div>
//         <h1>Meu projeto: {this.state.hora} </h1>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: "Camila",
//       contador: 0,
//     };

//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//   }

//   aumentar() {
//     let state = this.state;
//     state.contador += 1;
//     this.setState(state);
//   }

//   diminuir() {
//     let state = this.state;
//     if (state.contador === 0) {
//       alert("Opa chegou no 0!");
//     }
//     state.contador -= 1;
//     this.setState(state);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Contador</h1>
//         <h3>
//           <button onClick={this.diminuir}>-</button>
//           {this.state.contador}
//           <button onClick={this.aumentar}>+</button>
//         </h3>
//       </div>
//     );
//   }
// }

// const BemVindo = (props) => {
//   return (
//     <div>
//       <h2>Bem-vindo(a){props.nome}</h2>
//       <h3>Tenho {props.idade} anos</h3>
//     </div>
//   );
// };

// const Equipe = (props) => {
//   return (
//     <div>
//       <Info nome={props.nome} cargo={props.cargo} idade={props.idade} />
//       <Social facebook={props.facebook} />
//       <hr />
//     </div>
//   );
// };

// const Info = (props) => {
//   return (
//     <div>
//       <h2>Olá sou o (a) {props.nome}</h2>
//       <h3>Cargo: {props.cargo}</h3>
//       <h3>Idade: {props.idade} anos</h3>
//     </div>
//   );
// };

// const Social = (props) => {
//   return (
//     <div>
//       <a href={props.facebook}>Facebook </a>
//       <a>LinkedIn </a>
//       <a>Youtube </a>
//     </div>
//   );
// };
// function App() {
//   return (
//     <div>
//       Olá Mundo!
//       <BemVindo nome="Camila" idade="35" />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Conheça nossa Equipe</h1>
//       <Equipe
//         nome="Camila"
//         cargo="Programadora"
//         idade="35"
//         facebook="https://google.com"
//       />
//       <Equipe
//         nome="Marcos"
//         cargo="Designer"
//         idade="45"
//         facebook="https://google.com"
//       />
//     </div>
//   );
// }

//CLASS COMPONENT

// class Equipe extends Component {
//   render() {
//     return (
//       <div>
//         <Sobre
//           nome={this.props.nome}
//           cargo={this.props.cargo}
//           idade={this.props.idade}
//         />
//         <Social />
//         <hr />
//       </div>
//     );
//   }
// }

// class Sobre extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Olá sou o(a) {this.props.nome}</h2>
//         <h3>Cargo: {this.props.cargo}</h3>
//         <h3>Idade: {this.props.idade} anos</h3>
//       </div>
//     );
//   }
// }

// const Social = (props) => {
//   return (
//     <div>
//       <a>Facebook </a>
//       <a>LinkedIn </a>
//       <a>Youtube </a>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <h1>Conheça nossa equipe:</h1>
//       <Equipe nome="Camila" cargo="Programadora" idade="35" />
//       <Equipe nome="Marcos" cargo="Designer" idade="45" />
//     </div>
//   );
// }

// export default App;
