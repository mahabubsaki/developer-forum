import jwt from 'jsonwebtoken';
import config from '../../config';
export function generateJwtToken(email: string, id: string): string {
    return jwt.sign({ email, id }, config.jwtSecret as string, { expiresIn: '30d' });
};