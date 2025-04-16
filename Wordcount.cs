
class WordCount
{
    public static void main(string[] args)
    {
        Console.WriteLine("Enter a Paragraph\n");
        string paragraph = Console.ReadLine();
        string[] words = Regex.split(paragraph.ToLower(), @"\w+");
        Dictonary<string, int> wordcount = new Dictonary<string, int>();

        foreach (string word in word)
        {
            if(string.IsNullOrWhiteSpace(word))
                continue;
            if(wordcount.ContainsKey(word))
                wordcount[word]++;  
            else
                wordcount[word] = 1;    
        }
        var repatedword = wordcount.OrderBydDescending(wordcount => wordcount.value).First();
        console.WriteLine($"Most repated word is '{repatedword.Key}' with {repatedword.Value} times");
    }
}