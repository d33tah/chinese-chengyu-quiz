# Chengyu Quiz

This is a toy project I built to demonstrate a minimalistic useful application
based on [Wiktionary](https://en.wiktionary.org). Wiktionary publishes its raw
data on [dumps.wikipedia.org](https://dumps.wikimedia.org/enwiktionary/latest/).
What I did is take their "pages-meta-current.xml.bz2" file, extract any entries
I could easily recognize as Chinese chengyu idioms and build a dataset
consisting only of questions and answers, in JSON format.

To reproduce the work, install Python package mwxml==0.3.3 and hanziconv==0.3.2.
Download pages-meta-current.xml.bz2 file, run `chengyu_parse_wiktionary.py`
on it, feed its output to `chengyu_extract_meanings.py` and save as
`chengyu-parsed.json`.
