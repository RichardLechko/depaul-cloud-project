# contact-us backend for depaul cloud project

This project is a Django-based web application for managing university recommendations.

## Installation

### Prerequisites

- Python 3.x
- pip (Python package installer)
- virtualenv (optional but recommended)

### Clone the Repository

# clone this repository with main branch 
git clone https://github.com/RichardLechko/depaul-cloud-project.git
cd depaul-cloud-project/


# Create a virtual environment
python -m venv proj-env

# Activate the virtual environment
# On Windows
proj-env\Scripts\activate

# On macOS/Linux
source proj-env/bin/activate

# Install Dependencies
pip install -r requirements.txt

# Apply Migrations
python manage.py migrate

# Run the dev
python manage.py runserver

# Access the Application

# Open your web browser and go to on your localhost 
http://127.0.0.1:8000/

# Contact Us API
# You can use the contact_us API to submit contact form data. The endpoint is:
http://127.0.0.1:8000/api/contact/

# Example POST request in json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "message": "Hello, I am interested in your services."
}

