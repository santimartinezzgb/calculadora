import { useState } from "react";

export default function App() {
  const [pantalla, setPantalla] = useState('')
  const [tema, setTema] = useState('')
  let interruptor = true;

  const cambiarTema = () => {
    if (interruptor == true) { interruptor = false } else { interruptor = true }
    return (interruptor == true)
      ? setTema("w-fit mx-auto rounded-md flex flex-col gap-10 bg-gray-800 p-10")
      : setTema("w-fit mx-auto rounded-md flex flex-col gap-10 bg-white p-10")
  }

  const listaNumeros: (string | number)[] = [
    1, 2, 3, 'c',
    4, 5, 6, '+',
    7, 8, 9, '-',
    0, '/', '*', '=',
    '.']

  const operaciones = (prompt: string) => {
    const resultado = eval(prompt)
    if (isNaN(resultado) == false) {
      return eval(prompt)
    } else { return ('Operación no válida') }
  }

  const colorClase = (num: number | string) => {
    const color = (col: string) => {
      return `bg-${col}-700 hover:bg-${col}-200 border-${col}-700 hover:border-${col}-700 text-white hover:text-${col}-700 p-2 size-30 font-semibold rounded-md text-5xl cursor-pointer border-1 mx-auto`
    }

    if (typeof (num) == 'number') return color(`gray`)
    if (typeof (num) == 'string' && num != '=' && num != 'c') return color('blue')
    if (num == '=') return color('orange')
    if (num == 'c') return color('red')
  }

  const numeros = () => {
    const numero = (num: number | string) => {
      const panel: HTMLDivElement = document.querySelector('#input')!
      const accion = () => {
        if (num != '=' && num != 'c') setPantalla(panel.innerHTML += `<p>${num}</p>`)
        if (num == 'c') setPantalla(panel.innerHTML = '')
        if (num == '=') {
          const resultado = operaciones(panel.textContent)
          setPantalla(panel.innerHTML = `<p>${resultado}</p>`)
        }
      }
      return (<button
        id={`${num}`}
        onClick={accion}
        className={colorClase(num)}>
        {num}</button>)
    }

    return listaNumeros.map(element => {
      return numero(element)
    });
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <section className="flex mx-auto gap-5">
          <button onClick={cambiarTema} className="bg-black border-2 border-amber-300 p-2 rounded-md font-bold cursor-pointer transition-all">🌛</button>
        </section>

        <div className={tema}>
          <div id='input' className="mx-auto flex bg-white rounded-md border-1 p-2 text-4xl w-135 h-20 m-2 items-center"></div>
          <section className="grid grid-cols-4 w-fit gap-5 mx-auto">
            {numeros()}
          </section>
        </div>

        <a href="https://www.github.com/santimartinezDev" className="flex gap-2 mx-auto bg-black w-fit p-2 rounded-md">
          <object type="image/svg+xml" data="logoGitHub.svg" width="24" height="24">Logo de GitHub
          </object>
          <p className="text-white">santimartinezDev</p>
        </a>
      </div>
    </>

  )
}


