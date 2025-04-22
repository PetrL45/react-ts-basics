const arrow1 = (x:number):number => x + 1

const arrow2 = (x:number):number => (
    x + 1
)

const arrow3 = (x:number):number => { return x + 1 }

export const App = () => {
    return(
        <div>
            <h1>Hello</h1>
            <p>Hello World!</p>
        </div>
    )
}