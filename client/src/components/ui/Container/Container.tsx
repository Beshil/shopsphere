import clsx from "clsx";
import type { ContainerProps } from "./Container.types";
import styles from './Container.module.css'
const Container = ({children, className}:ContainerProps) =>{

return (

    <div className={ clsx(styles.container, className)}>
{children}
</div>
)}

export default Container