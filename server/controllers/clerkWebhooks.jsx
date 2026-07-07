import User from "../models/User.js";
import {Webhook} from "svix";
const clerkWebhookSecret=async(req,res)=>{
    try{
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const headers={
                svixid:req.headers["svix-id"],
                svixtimestamp:req.headers["svix-timestamp"],
                svixsignature:req.headers["svix-signature"]
        };
        await whook.verify(JSON.stringify(req.body),headers);
        const {type,data}=req.body; 
        const userData ={
            _id: data.id,
            email: data.email_addresses[0].email_address,
            usename: data.first_name+" "+data.last_name,
            image: data.image_url,

        }
        switch(type){
    case "user.created":
        await User.create(userData);
        break;

    case "user.updated":
        await User.findByIdAndUpdate(data.id,userData);
        break;

    case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

    default:
        break;
}
    res.json({success:true, message:"Webhook received successfully"});
    }catch(err){
        console.log(err.message);
        res.json({success:false, message:err.message});
    }
}
export default clerkWebhookSecret;