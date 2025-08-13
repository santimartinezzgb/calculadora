import { useState } from "react";

export default function App() {
  const [pantalla, setPantalla] = useState('')

  const listaNumeros: (string | number)[] = [
    1, 2, 3, 'c',
    4, 5, 6, '+',
    7, 8, 9, '-',
    0, '/', '*', '=', '.']

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
      <div className="w-fit mx-auto rounded-md flex flex-col gap-10 bg-gray-400 p-10">
        <div id='input' className="mx-auto flex bg-white rounded-md border-1 p-2 text-4xl w-135 h-20 m-2 items-center"></div>
        <section className="grid grid-cols-4 w-fit gap-5 mx-auto">
          {numeros()}
        </section>
      </div>
    </>
  )
}


