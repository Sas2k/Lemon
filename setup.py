from setuptools import setup, find_packages

long_description = open('README.md', "r", encoding="utf-8").read()
#get packages from requirements.txt
with open('requirements.txt') as f:
    requirements = f.read().splitlines()


setup(
    name="Lemon-Library",
    version="1.3.0",
    packages=find_packages(),
    install_requires=requirements,
    author="Sasen Perera",
    author_email="sas8.communications@gmail.com",
    description="An experimental Full-Stack Framework for Python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Sas2k/Lemon",
    entry_points={
        'console_scripts': ['create-lemon-app = Lemon.create_lemon_app:main'],
    },
)