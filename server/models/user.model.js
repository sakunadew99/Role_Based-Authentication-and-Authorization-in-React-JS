import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Pre-save hook to hash the password before saving to the database
userSchema.pre('save', async function(next) {
    try {
        // If password is modified or this is a new user, hash the password
        if (this.isModified('password') || this.isNew) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
        
    }
});

const User = mongoose.model('user', userSchema);

export default User;
