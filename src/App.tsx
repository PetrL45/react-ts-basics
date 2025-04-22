const arrow1 = (x:number):number => x + 1

const arrow2 = (x:number):number => (
    x + 1
)

const arrow3 = (x:number):number => { return x + 1 }

export const App = () => {
    return(
        <p>Hello World!</p>
    )
}