'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';

interface ProfileCardProps {
  name: string;
  rating: number;
  reviews: number;
  specialties: string[];
  image: string;
  price: number;
}

export default function ProfileCard({ name, rating, reviews, specialties, image, price }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center mt-1">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1">{rating}</span>
            <span className="mx-1">•</span>
            <span className="text-sm">{reviews} avis</span>
          </div>
        </motion.div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">
            {price}€<span className="text-sm text-gray-500">/heure</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
          >
            <HeartIcon className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-sm font-medium text-indigo-600">Disponible</span>
      </motion.div>
    </motion.div>
  );
} 