from setuptools import setup

with open('requirements.txt') as requirements_file:
    requirements = requirements_file.read().split()

setup(
    include_package_data=True,
    install_requires=requirements,
    name='backend',
    packages=['backend'],
)
