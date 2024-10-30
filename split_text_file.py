import os

def split_text_file(input_file, output_dir):
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    total_length = len(content)
    split_length = total_length // 10
    remainder = total_length % 10

    start = 0

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for i in range(10):
        end = start + split_length + (1 if i == 9 else 0)
        output_file_path = os.path.join(output_dir, f"part_{i+1}.txt")
        with open(output_file_path, 'w', encoding='utf-8') as output_file:
            output_file.write(content[start:end])
        start = end

    print("Splitting complete. Created 10 files in", output_dir)

# Example usage:
input_file = r'C:\git-local\kinder-systems-azure-search-openai-demo\data'
output_dir = r'C:\git-local\kinder-systems-azure-search-openai-demo\data\split'
split_text_file(input_file, output_dir)
