import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np


def load_model(model_path):
    """
    Load the pre-trained Keras model.

    Args:
        model_path: The path to the model file.

    Returns:
        The pre-trained Keras model.
    """
    model = tf.keras.models.load_model(model_path)
    return model


def classify(model, img_array):
    """
    Classify a single image.

    Args:
        model: The pre-trained Keras model.
        img_array: A NumPy array of the image.

    Returns:
        A dictionary containing the classification scores.
    """
    img = img_to_array(load_img(img_array, target_size=(224, 224)))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)
    scores = model.predict(img)[0]
    return {"drawings": scores[0], "hentai": scores[1], "neutral": scores[2], "porn": scores[3], "sexy": scores[4]}
