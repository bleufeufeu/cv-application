import Input from "../elements/Input";
import { FaCircleUser } from "react-icons/fa6"

export default function GeneralForm({ generalInfo, changeHandler}) {
    return (
        <section className="generalForm">
            <h2><FaCircleUser /> Personal Information</h2>
            <Input 
                labelValue="Full Name"
                htmlFor="name"
                name="name"
                id="name"
                type="text"
                placeholder="John Doe"
                value={generalInfo.name}
                onChange={changeHandler}
            />

            <Input 
                labelValue="Your Role"
                htmlFor="role"
                name="role"
                id="role"
                type="text"
                placeholder="Full Stack Developer"
                value={generalInfo.role}
                onChange={changeHandler}
            />

            <Input 
                labelValue="Email"
                htmlFor="email"
                name="email"
                id="email"
                type="email"
                placeholder="john@doe.net"
                value={generalInfo.email}
                onChange={changeHandler}
            />

            <Input 
                labelValue="Phone Number"
                htmlFor="phone"
                name="phone"
                id="phone"
                type="tel"
                placeholder="(416) 967 1111"
                value={generalInfo.phone}
                onChange={changeHandler}
            />

            <Input 
                labelValue="Address"
                htmlFor="address"
                name="address"
                id="address"
                type="text"
                placeholder="1 Sesame Street, Earth"
                value={generalInfo.address}
                onChange={changeHandler}
            />

            <Input 
                labelValue="Website"
                htmlFor="website"
                name="website"
                id="website"
                type="url"
                placeholder="google.com"
                value={generalInfo.website}
                onChange={changeHandler}
            />
        </section>
    );
}